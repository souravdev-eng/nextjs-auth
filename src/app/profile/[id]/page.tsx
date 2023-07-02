export default function ProfileDetails({ params }: any) {
  console.log(params);

  return (
    <div
      className='flex flex-col items-center justify-center 
         min-h-screen py-2'
    >
      <h1>Profile</h1>
      <hr />
      <p className='text-4xl'>Profile page {params.id}</p>
    </div>
  );
}
