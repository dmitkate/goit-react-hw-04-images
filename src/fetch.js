import axios from 'axios';
 axios.defaults.baseURL = 'https://pixabay.com/api';
export const FetchAPI= async(name, page) => {
     const response = await axios.get(
        `?q=${name}&page=${page}&key=29731703-4e8659812dd82e74a79e4fb84&image_type=photo&orientation=horizontal&per_page=12`
    );
    
    return response.data;
        }



