$(document).ready(function () {
  const productTypes_dropdown = $("#displayProp");
  const filterDiv = $("#filterDiv");

  //ref:https://stackoverflow.com/questions/5524045/jquery-non-ajax-post
  function submit(action, method, values) {
    var form = $("<form/>", {
      action: action,
      method: method,
    });
    $.each(values, function () {
      form.append(
        $("<input/>", {
          type: "hidden",
          name: this.name,
          value: this.value,
        })
      );
    });
    form.appendTo("body").submit();
  }

  function checkString(parameter, name) {
    if (parameter === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }
    if (typeof parameter != "string")
      throw `parameter ${name} must be of type string.`;
    if (parameter.trim().length === 0)
      throw `parameter cannot be an empty string.`;
  }

  $(document).on("click", "#search_submit", function (e) {
    const searchTerm = $("#search_bar").val();

    try {
      checkString(searchTerm);
    } catch {
      e.preventDefault();
      $("#error_search").remove();
      $("#div_search_bar").append(
        `<p id="error_search"> Please provide a valid search term to search products.</p>`
      );
    }
  });

  $(document).on("click", ".dropdown-item", function (e) {
    const product_type = $(this).val();
    filterDiv.empty();
    property_types_list = [];
    $.ajax({
      url: `/properties/${product_type}`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        let formData = `<form id ="filterData">`;
        for (prop of data) {
          if (prop.type == "number") {
            formData =
              formData +
              `
            <div>
            <label for ="${prop.name}"> ${prop.name} (max value)</label>
            <input type = "number" id = "${prop.name}"name= "${prop.name}">
            </div>`;
          } else {
            //wrote this code to remove bugs
            if (prop.name === undefined) {
              continue;
            }

            formData =
              formData +
              `
              <div>
              <label for ="${prop.name}"> ${prop.name}</label>
              <input type = "text" id = "${prop.name}"name= "${prop.name}">
              </div>`;
          }
        }

        formData =
          formData + `<input type="button" value="filter" id="filterButton" />`;

        formData =
          formData +
          `<input type="hidden" value="${product_type}" name="product_type">`;

        formData = formData + `</form>`;
        filterDiv.append(formData);
      },
      error: function () {
        console.log("fdcsxz");
      },
    });
  });

  $(document).on("click", "#filterButton", function (e) {
    e.preventDefault();
    const filterData = $("#filterData").serializeArray();

    const updatedData = [];

    for (i of filterData) {
      console.log(i);
      if (i.value == "") {
        continue;
      }

      updatedData.push(i);
    }

    submit("/filter", "POST", updatedData);
  });
});
