import PropTypes from "prop-types";
import NewsCard from "../NewsCard";
import styles from "./NewsList.module.css";

const NewsList = ({ articles }) => {
  return (
    <div className={styles.newsList}>
      {/* Mengiterasi array articles menggunakan metode map. */}
      {/* Jika sebuah artikel tidak memiliki gambar, judul atau konten, maka akan diabaikan (di-return null). */}
      {articles.map((article, index, arr) => {
        // Memeriksa apakah artikel memiliki gambar, judul dan konten
        if (!article.urlToImage || !article.title || !article.content) {
          // Jika tidak, maka artikel tersebut diabaikan
          return null;
        }

        return (
          // Membuat komponen NewsCard untuk setiap artikel dalam array articles.
          // Komponen ini akan menerima beberapa properti dari setiap artikel, seperti gambar, judul, tanggal, penulis, sumber, deskripsi, dan URL.
          //  Komponen ini juga akan menggunakan prop notLastChild untuk menentukan apakah komponen tersebut adalah komponen terakhir dalam array atau tidak.
          <NewsCard
            //  memberikan key unik untuk setiap komponen NewsCard untuk memudahkan dalam menangani duplikasi
            key={index}
            // mengatur gambar dari artikel
            src={article.urlToImage}
            //  mengatur judul dari artikel
            title={article.title}
            // mengatur tanggal publikasi dari artikel
            publishedAt={article.publishedAt}
            // mengatur penulis dari artikel
            author={article.author}
            // mengatur nama sumber dari artikel
            sourceName={article.source.name}
            // mengatur deskripsi dari artikel
            description={article.description}
            // mengatur URL dari artikel
            url={article.url}
            // memberikan prop notLastChild untuk menentukan apakah komponen tersebut adalah komponen terakhir dalam array atau tidak
            notLastChild={!(arr.length === index + 1)}
          />
        );
      })}
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.array,
};

export default NewsList;
