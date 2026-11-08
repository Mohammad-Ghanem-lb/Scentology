import React from "react";
import { perfumes } from "../Data/Data"; // أو المسار الصحيح لملف Data لديك
import PerfumeItem from "../Components/PerfumeItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Catalog() {
  return (
    <section className="catalog py-5">
      <div className="container">
        {/* عنوان الصفحة */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-uppercase">Our Catalog</h1>
          <p className="lead text-muted">
            Explore our luxury collection of handcrafted fragrances
          </p>
        </div>

        {/* عرض العطور باستخدام .map() */}
        <div className="row g-4">
          {perfumes.map((perfume) => (
            <div className="col-12 col-md-6 col-lg-4" key={perfume.id}>
              <PerfumeItem
                image={perfume.image}
                name={perfume.name}
                category={perfume.category}
                price={perfume.price}
                rating={perfume.rating}
                description={perfume.description}
                topNotes={perfume.topNotes}
                middleNotes={perfume.middleNotes}
                baseNotes={perfume.baseNotes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;