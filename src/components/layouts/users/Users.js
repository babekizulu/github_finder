import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import GithubContext from '../../../context/github/githubContext'


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users} = githubContext;

        if (loading) {
            return <Spinner/>
        } else {
            return (
                <div style={user_style}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            )
        }     
}

const user_style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
}

export default Users
