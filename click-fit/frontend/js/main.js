$(document).ready(function () {
  // Fetch and display number fact
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#apiData").text(data.text).hide().fadeIn(1000);
    },
    error: function (error) {
      $("#apiData").text("Failed to load daily fact").addClass("alert-danger");
    },
  });

  // Image upload handling
  const dropArea = $("#dropArea");
  const fileInput = $("#fileInput");

  dropArea.on("dragover dragenter", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass("drag-over");
  });

  dropArea.on("dragleave drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass("drag-over");
  });

  dropArea.on("drop", function (e) {
    const files = e.originalEvent.dataTransfer.files;
    handleFiles(files);
  });

  dropArea.on("click", function () {
    fileInput.click();
  });

  fileInput.on("change", function () {
    handleFiles(this.files);
  });

  function handleFiles(files) {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("image", file);
    });

    $.ajax({
      url: "/api/upload/upload",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        alert("Upload successful!");
      },
      error: function (error) {
        alert("Upload failed. Please try again.");
      },
    });
  }
});
