import User  from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';

import { data } from '../Data/user';



export const App = () => {
  return (
    <div>
      <Section><User user={data[0]}/></Section>
      <Section title ='List Of Users'><UsersList users={data} /></Section>
      
    </div>
  );
};
