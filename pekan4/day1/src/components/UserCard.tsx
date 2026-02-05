import React, { useState } from 'react';
import type { User } from '../types/index';

interface UserCardProps {
    user: User;
    onUpdateStatus: (id: number, status: boolean) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onUpdateStatus }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateStatus(user.id, e.target.checked);
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
            <p>Roles: {user.roles.join(', ')}</p>
            <label>
                Toggle Status:
                <input
                    type="checkbox"
                    checked={user.isActive}
                    onChange={handleToggle}
                />
            </label>
            {isHovered && <p>(Viewing Details...)</p>}
        </div>
    );
};
