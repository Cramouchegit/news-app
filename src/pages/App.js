import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NewsList from "../components/NewsList";

import { getNews } from "../services/getNews";

// Komponen ini akan digunakan sebagai halaman utama dari aplikasi.
// Komponen ini akan mengambil parameter dari URL path, dan akan
// mengambil data dari backend menggunakan fungsi getNews.
// Komponen ini akan menampilkan data dari backend menggunakan komponen
// NewsList.

// Komponen ini akan menggunakan state untuk menyimpan data dari backend.
// Komponen ini akan menggunakan state untuk menyimpan status loading,
// error, dan data dari backend.

// Komponen ini akan menggunakan hook useEffect untuk mengambil data
// dari backend ketika komponen ini di-render.

// Komponen ini akan menggunakan komponen Navbar, Container, Loading,
// Error, dan NewsList.
function App() {
  // Menginisialisasi state untuk menyimpan data dari backend.
  const [articles, setArticles] = useState([]);

  // Menginisialisasi state untuk menyimpan status loading dan error.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Mengambil parameter dari URL path.
  const { id } = useParams();

  // Menginisialisasi default query search.
  const DEFAULT_SEARCH_QUERY = "microsoft";

  // Mengambil data dari backend ketika komponen ini di-render.
  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);

      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY,
      });

      // Jika tidak ada respons dari backend, maka periksa apakah nilai res adalah null atau undefined.
      // Jika iya, maka set loading dan error menjadi false dan tutup fungsi fetchTechNews.
      // Ini digunakan untuk menangani kasus ketika ada kesalahan dalam mengambil data dari backend.
      if (!res) {
        setLoading(false);
        setError(true);

        return;
      }
      // Jika tidak ada kesalahan, maka set loading menjadi false dan set articles menjadi hasil dari property articles dari respons backend.
      setLoading(false);
      setArticles(res.articles);
    };

    fetchTechNews();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container>
        {/* Menampilkan komponen loading ketika data dari backend
           sedang diambil */}
        {loading && <Loading />}

        {/* Menampilkan komponen error ketika gagal mengambil data
           dari backend */}
        {error && <Error />}

        {/* Menampilkan komponen NewsList ketika data dari backend
           sudah diambil dan tidak kosong */}
        {!loading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
