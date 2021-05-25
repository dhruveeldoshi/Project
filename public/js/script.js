$(document).ready(function () {
  let count = 0;

  function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
      returnArray[formArray[i]["name"]] = formArray[i]["value"];
    }
    return returnArray;
  }
  function checkString(parameter, name) {
    if (parameter === undefined) {
      return false;
    }
    if (typeof parameter != "string") return false;
    if (parameter.trim().length === 0) return false;

    return true;
  }

  function checkFacet(facet) {
    if (facet.length < 2) {
      throw `Item should have atleast one property.`;
    }
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

  $("#add_product_sub").click(function (e) {
    let i = 1;
    const facetList = [];
    const body = objectifyForm($("#productForm").serializeArray());
    facetList.push({ property: "product_type", value: body["product_type"] });
    while (i <= count) {
      facetList.push({
        property: $(`#prop_name${i}`).val(),
        value: $(`#prop_val${i}`).val(),
      });

      i++;
    }

    body["facet"] = facetList;
    body["createdBy"] = "Extra feature of the project";

    if (!checkString(body["title"])) {
      alert("please enter valid title.");
      return;
    }

    if (!checkString(body["description"])) {
      alert("please enter valid description.");
      return;
    }
    if (!checkString(body["productImage"])) {
      alert("please enter valid productImage.");
      return;
    }

    if (!checkString(body["product_type"])) {
      alert("please enter valid product_type.");
      return;
    }

    if (!checkInt(body["stock"])) {
      alert("stock has to be positive number");
      return;
    }

    if (!checkInt(body["price"])) {
      alert("price has to be positive number");
      return;
    }

    try {
      checkFacet(body["facet"]);
    } catch (e) {
      alert(e);
      return;
    }

    $.ajax({
      url: "/product", // url where to submit the request
      type: "POST", // type of action POST || GET
      dataType: "json", // data type
      data: body, // post data || get data

      complete: function (e) {
        if (e.status == 200) {
          $("#error_msg").empty();
          $("#exampleModalLong").hide();
          $("#prod_modal_dialog").hide();
          location.reload();
        } else if (e.status == 400) {
          $("#error_msg").empty();
          $("#error_msg").append(
            `<p>Error! ${JSON.parse(e.responseText)["error"]}</p>`
          );
        } else {
          $("#error_msg").empty();
          $("#error_msg").append(
            `<p>Error! ${JSON.parse(e.responseText)["error"]}</p>`
          );
        }
      },
    });
  });

  $("#add_property").click(function () {
    count = count + 1;
    const divTag = $("#properties");
    const add = `\
    <label for='name'>Property ${count}  Name </label>\
    <input type='text' name='name' class='form-control' id = 'prop_name${count}'>\
    <label for='value'>Property ${count} Value</label>\
    <input type='text' name='value' class='form-control' id = 'prop_val${count}'>`;

    divTag.append(add);
  });

  $(".delete_product").on("click", function (e) {
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/product/" + id, // url where to submit the request
      type: "delete", // type of action POST || GET
      dataType: "json", // data type
      // data : id, // post data || get data
      success: function (data) {
        //    alert("deleted");
        location.reload();
      },
      error: function () {},
    });
  });

  $(".product_click").on("click", function (e) {
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/products/product/" + id, // url where to submit the request
      type: "GET", // type of action POST || GET
      success: function (data) {
        window.location.href = "http://localhost:3000/products/product/" + id;
      },
      error: function () {},
    });
  });

  $(".buy_now").on("click", function (e) {
    const id = $(this).attr("data-id");
    alert("Product has beed added to Cart");
    $.ajax({
      url: "/addtocart/" + id, // url where to submit the request
      type: "patch", // type of action POST || GET

      success: function (data) {
        window.location.href = "http://localhost:3000/products/product/" + id;
      },
      error: function () {},
    });
  });

  $("#cart_btn").on("click", function (e) {
    $.ajax({
      url: "/cart/", // url where to submit the request
      type: "get", // type of action POST || GET
      success: function (data) {
        window.location.href = "http://localhost:3000/cart/";
      },
      error: function () {},
    });
  });

  $("#confirmation").on("click", function (e) {
    alert("Purchase done sucessfully");

    $.ajax({
      url: "/buy", // url where to submit the request
      type: "get", // type of action POST || GET
      success: function (data) {
        window.location.href = "http://localhost:3000/";
      },
      error: function () {},
    });
  });

  $(".add_review").on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("data-id");

    const review = $("#reviewForm").serializeArray()[0]["value"]; // code to get the review text data

    if (!checkString(review)) {
      alert("Please enter a valid review");
      return;
    }
    $.ajax({
      url: "/product/comment/" + id, // url where to submit the request
      type: "patch", // type of action POST || GET
      data: { review: review },
      success: function (data) {
        window.location.href = "http://localhost:3000/products/product/" + id;
      },
      error: function () {
        window.location.href = "http://localhost:3000/" + id;
      },
    });
  });
});
