import axios from "axios";
import swal from "sweetalert2";

export default {
  post: async (url, payload) => {
    let result = {};
    if (navigator.onLine) {
      let storeCostcenter = { ...payload };
      delete storeCostcenter.createdAt;
      delete storeCostcenter.updatedAt;
      Object.keys(storeCostcenter).forEach(
        key =>
          (storeCostcenter[key] === null ||
            storeCostcenter[key] === undefined) &&
          delete storeCostcenter[key]
      );
      try {
        result = await axios.post(url, storeCostcenter);
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thành công",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.log(error);
        if (error.toString().includes("Network", 0)) {
          console.log("Không thể kế nối đến máy chủ !");
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Không thể kết nối đến máy chủ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } else {
      console.log("Không có kết nối internet!");
      swal.fire({
        position: "top-end",
        icon: "question",
        title: "Không có kết nối internet!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return result;
  },
  delete: async url => {
    let result = {};
    if (navigator.onLine) {
      try {
        result = await axios.delete(url);
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thành công",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.log(error);
        if (error.toString().includes("Network", 0)) {
          console.log("Không thể kế nối đến máy chủ !");
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Không thể kết nối đến máy chủ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } else {
      console.log("Không có kết nối internet!");
      swal.fire({
        position: "top-end",
        icon: "question",
        title: "Không có kết nối internet!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return result;
  },
  put: async (url, payload) => {
    let result = {};
    if (navigator.onLine) {
      let updateItem = { ...payload };
      delete updateItem.createdAt;
      delete updateItem.updatedAt;
      Object.keys(updateItem).forEach(
        key =>
          (updateItem[key] === null || updateItem[key] === undefined) &&
          delete updateItem[key]
      );
      try {
        result = await axios.put(url, updateItem);
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thành công",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.log(error);
        if (error.toString().includes("Network", 0)) {
          console.log("Không thể kế nối đến máy chủ !");
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Không thể kết nối đến máy chủ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } else {
      console.log("Không có kết nối internet!");
      swal.fire({
        position: "top-end",
        icon: "question",
        title: "Không có kết nối internet!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return result;
  },
  get: async url => {
    let result = {};
    if (navigator.onLine) {
      try {
        result = await axios.get(url);
      } catch (error) {
        console.log(error);
        if (error.toString().includes("Network", 0)) {
          console.log("Không thể kế nối đến máy chủ !");
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Không thể kết nối đến máy chủ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } else {
      console.log("Không có kết nối internet!");
      swal.fire({
        position: "top-end",
        icon: "question",
        title: "Không có kết nối internet!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return result;
  }
};
