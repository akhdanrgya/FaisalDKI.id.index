import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RelawanForm = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [nik, setNik] = useState("");
  const navigate = useNavigate()

  const savePendukung = async (e) =>{
    e.preventDefault()
    try {
        await axios.post("http://localhost:5000/pendukung",{
            nama,
            alamat,
            nik,
            hp,
            email,
            kecamatan
        })
        navigate("/")
        alert("Data anda berhasil di input")
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div class="registration-form">
        <form onSubmit={savePendukung}>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="username"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama Lengkap"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="username"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Alamat"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="password"
              value={kecamatan}
              onChange={(e) => setKecamatan(e.target.value)}
              placeholder="Kecamatan"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="phone-number"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              placeholder="Nomor HP"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="birth-date"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              placeholder="Nomor Induk Kependudukan ( NIK )"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-block create-account">
              Selesai
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RelawanForm;
