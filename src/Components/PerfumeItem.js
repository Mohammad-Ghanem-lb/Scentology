function PerfumeItem({ 
  image, 
  name, 
  category, 
  price, 
  rating, 
  description, 
  topNotes, 
  middleNotes, 
  baseNotes 
}) {
  return (
    <div className="card shadow-sm border-0 h-100">
      {/* صورة العطر */}
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />
      
      <div className="card-body d-flex flex-column text-center p-4">
        {/* اسم العطر والفئة */}
        <h5 className="card-title fw-bold text-dark mb-1">{name}</h5>
        <span className="badge bg-secondary mb-2 align-self-center">{category}</span>
        
        {/* السعر والتقييم */}
        <div className="d-flex justify-content-between align-items-center my-2 fs-6">
          <span className="fw-bold text-dark">${price}</span>
          <span className="text-warning">★ {rating}</span>
        </div>

        {/* الوصف */}
        {description && (
          <p className="card-text text-muted small mb-3 text-start">
            {description}
          </p>
        )}

        {/* المكونات والنوتات العطرية */}
        {(topNotes || middleNotes || baseNotes) && (
          <div className="border-top pt-2 mt-auto text-start extra-small">
            {topNotes && (
              <p className="mb-1 text-secondary small">
                <strong>Top:</strong> {topNotes}
              </p>
            )}
            {middleNotes && (
              <p className="mb-1 text-secondary small">
                <strong>Middle:</strong> {middleNotes}
              </p>
            )}
            {baseNotes && (
              <p className="mb-0 text-secondary small">
                <strong>Base:</strong> {baseNotes}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PerfumeItem;