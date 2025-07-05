'use client';

const serviceImages = [
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707036/004_g0ofan.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707036/003_vda4v0.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707038/009_exdmdk.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707038/006_zl74k1.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707038/007_ydbbs8.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707037/010_uhvz7g.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707036/005_c8asqu.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707036/008_fp3gnt.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707037/011_l5pxry.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707035/002_vnajf3.png',
  'https://res.cloudinary.com/da48bjec6/image/upload/v1751707035/012_fb9qnq.png',
];

const ServicesGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
<h1 className="text-5xl font-extrabold text-center mt-10 mb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {serviceImages.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Service ${index + 1}`}
              className="w-48 h-48 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
