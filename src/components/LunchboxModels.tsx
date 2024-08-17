import GLBViewer from './GLBViewer';
import { useNavigate } from 'react-router-dom';

const models = [
  { path: "/360-base.glb", name: "Base" },
  { path: "/360extender.glb", name: "Extender" },
  { path: "/360-seperator(1).glb", name: "Separator" },
  { path: "/360-seperator.glb", name: "Top Cover" },
  { path: "/360-casing-extension(1).glb", name: "Connector" },
  { path: "/360-container11.glb", name: "Holder" },
];

const LunchboxModels = () => {

  const navigate = useNavigate();

  return (
    <div className="select-none min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 p-8">
      <button
        onClick={() => navigate("/")}
        className='bg-black text-white w-fit px-4 py-2 rounded-md font-semibold'>Back</button>

      <h1 className="text-3xl font-bold text-sky-800 text-center mb-6">
        Parts of Lunchbox
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {models.map((model, index) => (
          <div
            key={model.path}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="h-64 lg:h-72">
              <GLBViewer
                modelPath={model.path}
                scale={[3, 3, 3]}
                isActive={true}
              />
            </div>
            <div className="p-4 bg-sky-800 text-white">
              <h2 className="text-xl font-semibold text-center">{model.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchboxModels;