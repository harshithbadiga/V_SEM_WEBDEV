var form = document.getElementById('formid');
var htmlFile = document.getElementById('data');
var resultDiv = document.getElementById('result');



htmlFile.onchange = async (e) => {

  e.preventDefault();
  try {
    console.log()
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      const response = await fetch("http://127.0.0.1:8000/predict/image", {
          method: 'POST',
          headers:{
            'Access-Control-Allow-Origin': '*'
            // 'Content-Type': 'multiport/form-data'
          },
          body: formData
      });
    
      response.json().then(function(json){
        var res = JSON.stringify(json.class);
        resultDiv.innerText = res;
        console.log(res);
      })

  } catch (error) {
      console.error(error);
  }

}

const image_input = document.querySelector("#data");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});



