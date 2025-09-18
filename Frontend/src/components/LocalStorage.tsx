
const storage = {
    set: (key: string, value: any) => {
      localStorage.setItem(key, value);
    },
    get: (key: string) => {
      const value = localStorage.getItem(key);
      
      if ( value !== 'undefined'  ){ ;return   value;}
      //else return  JSON.parse(value as any);
    },
    remove: (key: string) => {
      localStorage.removeItem(key);
    },
  };
  
export default storage;

