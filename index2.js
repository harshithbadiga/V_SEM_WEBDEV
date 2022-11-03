var form = document.getElementById('formid');
var user_text_input = document.getElementById('text_data');
var outputDiv = document.getElementById('outputdiv')

var htmlFile = document.getElementById('data');
var resultDiv = document.getElementById('result');
var resultDiv1 = document.getElementById('result1');

const apiKey = 'nQ7Z/Qsb0jEoRBbV85di0A==YsnhffzBz9Qp2l8D';

htmlFile.onchange = async (e) => {

  var newRes;

  
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
        newRes = res;
        console.log(res);

        // getting the calories
        
        var query = user_text_input + " " + res.replace(/['"]+/g, '');
        console.log(query);
        $.ajax({
            method: 'GET',
            url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            headers: { 'X-Api-Key': apiKey},
            contentType: 'application/json',
            success: function(result) {
                generate_table(result);
                console.log(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });

      })

  } catch (error) {
      console.error(error);
  }

}

const generate_table = (data) => {
  const result = data.items[0];
  console.log(result)
  console.log(result.calories)
  const table = `
  <table class='table1'>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Serving Size</th>
        <th scope="col">Calories</th>
        <th scope="col">Total Fat</th>
        <th scope="col">Saturated Fat</th>
        <th scope="col">Cholesterol</th>
        <th scope="col">Sodium</th>
        <th scope="col">Carbohydrates</th>
        <th scope="col">Fiber</th>
        <th scope="col">Sugar</th>
        <th scope="col">Protein</th>
      </tr>
    </thead>
    <tbody id="result"><<tr><td>${result.name}</td><td>${result.serving_size_g}</td><td>${result.calories}</td><td>${result.fat_total_g}</td><td>${result.fat_saturated_g}</td><td>${result.cholesterol_mg}</td><td>${result.sodium_mg}</td><td>${result.carbohydrates_total_g}</td><td>${result.fiber_g}</td><td>${result.sugar_g}</td><td>${result.protein_g}</td>
  </tr>
</tbody>
  </table>
`
resultDiv1.innerHTML += table;
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



