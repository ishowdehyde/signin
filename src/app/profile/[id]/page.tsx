import Image from "next/image";

export default function editProfile({ params }: any) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <Image
            className="w-24 h-24 rounded-full mx-auto"
            src="/profile.png"
            alt="profile"
            width={100}
            height={100}
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {params.id}
          </h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Email:</span>
            <span className="text-gray-800 w-3/4">
              olawaleishola250@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Location:</span>
            <span className="text-gray-800 w-3/4">Iyanaisashi, ojo</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Bio:</span>
            <span className="text-gray-800 w-3/4">
              Passionate about teaching student and builing web apps and
              improving user experiences
            </span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
