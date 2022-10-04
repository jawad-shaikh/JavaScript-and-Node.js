function car_info(info) {
  document.getElementById("document").innerHTML =
    info.Manufectures + " " + info.Model_Name + " " + info.color;
}

car_info({
  Manufectures: "Honda",
  Model_Name: "125",
  color: "(Red)",
});
