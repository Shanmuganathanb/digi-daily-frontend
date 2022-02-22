class CommonUtils { 
  static timeDisplay(dateString) {
    let date = new Date(dateString);
    return date.toLocaleString("en-IN");
  }
}

export default CommonUtils;