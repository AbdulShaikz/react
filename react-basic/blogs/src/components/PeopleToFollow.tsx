import UserCard from "./UserCard";

const peopleToFollow = [
    {name: 'Huxn', following: true },
    {name: 'Kirat', following: true },
    {name: 'Google', following: true },
    {name: 'James', following: false },
    {name: 'Danny', following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semi-bold text-lg mb-4">People to follow</h3>
        <div className="space-y-4">
          {peopleToFollow.map((person,index) => (
            <UserCard key={index} person={person}/>
          ))}
        </div>
    </div>
  )
}

export default PeopleToFollow