module.exports = {
  Roboto: {
    normal: Buffer.from(
      require("pdfmake/build/vfs_fonts").pdfMake.vfs["Roboto-Regular.ttf"],
      "base64"
    ),
    bold: Buffer.from(
      require("pdfmake/build/vfs_fonts").pdfMake.vfs["Roboto-Medium.ttf"],
      "base64"
    ),
  },
};
