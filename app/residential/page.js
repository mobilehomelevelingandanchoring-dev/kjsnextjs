export default function ResidentialPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8 text-center">Residential Pressure Washing</h1>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-700">
          Professional pressure washing services for homes, driveways, decks, and more. We restore your property's curb appeal with safe, effective cleaning methods.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">House Exterior</h3>
          <p className="text-gray-600">Remove dirt, mold, and mildew from siding and walls.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">Driveways & Walkways</h3>
          <p className="text-gray-600">Eliminate stains and restore concrete surfaces.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-3">Decks & Patios</h3>
          <p className="text-gray-600">Clean and protect your outdoor living spaces.</p>
        </div>
      </div>
    </div>
  );
}
