const aksi = async () => {
  try {
  const response = await fetch ("https://randomuser.me/api/");
  if (!response) return new Error("gagal terhubung");
  
  const data = await response.json();
  const {} =
  
  } catch (err){
    document.getElementById("ubah").innerHTML = `<p> error : ${err.message} </p>`
  }
}

const fungsi = ({}) => {
  
}




document.getElementById("tbl-ambil").addEventListener("click", aksi);