const Home = () => {
  const pageContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis eveniet voluptates explicabo, impedit eos ducimus vel aliquam amet officiis molestias iure sit porro. Nemo incidunt sint delectus accusantium aspernatur! At ea dolores tempora autem numquam veniam cum iure neque soluta facere porro unde, odio, inventore temporibus recusandae distinctio! Sapiente atque qui voluptas accusantium provident reprehenderit.Repudiandae quam dicta reiciendis ?';

  return (
    <div className="m-4">
      <p className="text-xl font-black my-10">Welcome to how page!</p>
      <div className="text-thin">
        <p className="my-4">{pageContent}</p>
        <p className="my-4">{pageContent}</p>
      </div>
    </div>
  );
};

export default Home;
