export default function CommercialPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8 text-center">Commercial Pressure Washing</h1>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-700">
          Keep your business looking professional with our commercial cleaning services. From storefronts to parking lots, we handle properties of all sizes.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">Building Exteriors</h3>
          <p className="text-gray-600">Professional cleaning for office buildings and retail spaces.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">Parking Lots</h3>
          <p className="text-gray-600">Remove oil stains and maintain clean parking areas.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">Storefronts</h3>
          <p className="text-gray-600">Create a welcoming first impression for customers.</p>
        </div>
      </div>
    </div>
  );
}
