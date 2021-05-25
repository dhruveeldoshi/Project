$(document).ready(function () {
  const productTypes_dropdown = $("#displayProp");
  const filterDiv = $("#filterDiv");
  const int_prop = [];

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

  function checkInt(parameter) {
    const paramter = parseInt(parameter);

    if (isNaN(paramter)) {
      return false;
    }

    if (typeof paramter != "number") return false;

    if (paramter < 1) {
      return false;
    }

    if (parameter.split(".").length > 1) return false;

    return true;
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
            int_prop.push(prop.name);
            formData =
              formData +
              `
            <div>
            <label for ="${prop.name}"> Maximum value of ${prop.name} </label>
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
      i.value = i.value.toLowerCase();

      if (int_prop.includes(i.name)) {
        if (!checkInt(i.value)) {
          alert(` ${i.name} should be a positive number`);
          return;
        }
      }

      updatedData.push(i);
    }

    submit("/filter", "POST", updatedData);
  });
});
