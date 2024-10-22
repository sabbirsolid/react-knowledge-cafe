import profile from '../../assets/profile.png'
const Header = () => {
    return (
    //     <div style={{ backgroundColor: 'lightblue', padding: '20px', color: 'white' }}>
    //   <h1 style={{ fontSize: '2rem' }}>Hello, World!</h1>
    // </div>
        <div className='flex justify-between items-center mx-4 p-4 border-b-2'>
            <h1 className='text-blue-800 text-6xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;