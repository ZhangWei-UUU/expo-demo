
const PictureForm = (uri) => {
  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];
  let formData = new FormData();
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  console.log("lai", formData)
  return formData;
}

export default PictureForm;