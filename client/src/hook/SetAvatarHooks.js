// SetAvatarHook.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InsertAvatar, insertAvatar } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import notify from '../hook/useNotifaction';
import { UseInsertDataWithImage } from '../hooks/useInsertData';


const SetAvatarHook = () => {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const [selectedAvatar,setSelectedAvatar] = useState(null);
console.log(avatars)
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, []);
  const user = JSON.parse(localStorage.getItem('user'));
console.log(isLoadingImg)
  
  const res = useSelector((state) => state.authReducer.addAvatar);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedAvatar === null) {
      notify('من فضلك اختار صورة', 'warn');
      return;
    } 
  
         setIsLoadingImg(true)
        await InsertAvatar({ avatarImage: avatars[selectedAvatar]});
        // console.log(res);

          user.isAvatarImageSet = true;
          user.avatarImage = avatars[selectedAvatar];
          localStorage.setItem('user', JSON.stringify(user));
          // console.log(usernew)
          // notify("تم تحديد الصوره", "success")

          // setTimeout(() => {
          //               window.location.href = "/"
          //               navigate('/');;
          //           }, 1500);
          setIsLoadingImg(false)

  };


  useEffect(() => {

    if (isLoadingImg === false) {
   
      
            setTimeout(() => {
               
                
            notify("تمت اضافة العنوان بنجاح", "success")
             navigate('/')
            }, 1500);
            
            console.log(res)
            setIsLoadingImg(true)
            console.log(res)
            // setSelectedAvatar(null)
console.log(isLoadingImg)
    }
}, [isLoadingImg])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
          data.push(image.data);
          // console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm"+image.data)
        }
        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return [handleSubmit, avatars, selectedAvatar, isLoading, setSelectedAvatar];
};

export default SetAvatarHook;
