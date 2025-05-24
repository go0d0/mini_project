const aksi = async () => {
  try {
  const response = await fetch ("https://randomuser.me/api/");
  if (!response) return new Error("gagal terhubung");
  
  const {results} = await response.json();
  const [data] =results;

  const {name:{first,last}, email, location:{city,country}, picture:{large}} = data;

  fungsi ({first,last,email,city,country,large});
  
  } catch (err){
    document.getElementById("ubah").innerHTML = `<p> error : ${err.message} </p>`
  }
}

const fungsi = ({first,last, email,city,country,large}) => {
  document.getElementById("ubah").innerHTML  = `<h4> ${first}, ${last}</h4>
  <p> ${email}</p>
  <p> ${city} , ${country}</p>
  <img src="${large}" alt="gambar">`;
}




document.getElementById("tbl-ambil").addEventListener("click", aksi);