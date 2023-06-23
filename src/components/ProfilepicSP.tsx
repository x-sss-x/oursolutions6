"use client"
import React, { useRef, useState } from 'react';

const ProfilePictureSP = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result as string;
        setProfilePic(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <center>
    <div className="profile-picture" onClick={handleFileSelect}>
      {profilePic ? (
        <img src={profilePic} alt="Profile" className="picture" />
      ) : (
        <div className="camera-icon" />
      )}

      <input
  
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
   
      <style jsx>{`
        .profile-picture {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e0e0e0;
          cursor: pointer;
          overflow: hidden;
        }

        .picture {
          width: 140%;
          height: 140%;
          object-fit: cover;
        }

        .camera-icon {
          width: 70px;
          height: 70px;
          background-image: url('/path/to/camera-icon.png');
          background-size: cover;
        }
      `}</style>
    
    </div>
    </center>
  );
};

export default ProfilePictureSP;