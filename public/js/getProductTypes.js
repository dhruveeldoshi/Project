const productTypes_dropdown = $("#displayProp");
$(document).ready(function () {
  $.ajax({
    url: "/producttypes",
    type: "GET",
    dataType: "json",
    success: function (data) {
      productTypes_dropdown.empty();
      for (i of data) {
        const temp = `<button type="button" class="dropdown-item" value="${i}">${i}</button>`;
        productTypes_dropdown.append(temp);
      }
    },
    error: function () {},
  });
});
