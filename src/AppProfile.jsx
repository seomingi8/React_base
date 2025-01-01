import Profile from './components/Profile';
import './App.css'
import Avatar from './components/Avatar';

function AppProfile() {
  return (
    <>
    <Avatar
      image = 'https://images.unsplash.com/photo-1731329295698-26faaf820c87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8'
      isNew = {true}
    />
      <Profile image = 'https://images.unsplash.com/photo-1731329295698-26faaf820c87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8'
      name = 'star'
      title = '별 떨어진다'
      isNew = {true}
      />

      <Profile image = 'https://images.unsplash.com/photo-1731432246387-1bc4274a5a12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
      name = 'snow'
      title = '눈 떨어진다'/>
    </>
  );
}

export default AppProfile;
