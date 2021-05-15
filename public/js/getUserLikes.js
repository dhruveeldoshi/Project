$(document).ready(function () {
  function hasUserLikedThisProductBefore(productid) {
    let output = false;
    $.ajax({
      url: "/getUserLikedProducts/", // url where to submit the request
      type: "GET", // type of action POST || GET
      async: false,
      dataType: "json", // data type
      success: function (data) {
        for (i of data) {
          if (i._id === productid) {
            output = true;
            break;
          }
        }
      },
      error: function () {},
    });
    return output;
  }

  const userLiked = hasUserLikedThisProductBefore(
    $(".product_like").attr("data-id")
  );

  if (userLiked) {
    $("#unliked").attr("id", "liked");
  }

  $(".product_like").on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("data-id");
    if (userLiked) {
      $.ajax({
        url: "/product/dislike/" + id, // url where to submit the request
        type: "patch", // type of action POST || GET
        success: function (data) {
          window.location.href = "http://localhost:3000/products/product/" + id;
          $("#unliked").attr("id", "liked");
          userLiked = false;
        },
        error: function () {},
      });
    } else {
      $.ajax({
        url: "/product/like/" + id, // url where to submit the request
        type: "patch", // type of action POST || GET
        success: function (data) {
          window.location.href = "http://localhost:3000/products/product/" + id;
          $("#liked").attr("id", "unliked");
          userLiked = true;
        },
        error: function () {},
      });
    }
  });
});
