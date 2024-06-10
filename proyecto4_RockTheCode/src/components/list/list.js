
import './list.css';

export const createList = (site , list , name) => { 

     
     const ulList = document.createElement('ul');
     ulList.className = 'flex-container';
     ulList.id = name;
     site.append(ulList);

     for (let i = 0; i < list.length; i++) {
       
          let item = list[i];

          if (item.url) {

               const a = document.createElement('a');
               a.href = item.url;
               ulList.append(a);
               if (item.icon) {
                    const li = document.createElement('li');
                    a.append(li);
                    const img = document.createElement('img');
                    img.src = item.icon;
                    const div = document.createElement('div');
                    div.className = item.name;
                    div.appendChild(img);
                    li.appendChild(div);
                
               } else {
                    
                    const li = document.createElement('li');
                    li.className = item.name;
                    const p = document.createElement('p');
                    p.innerText = item.text
                    li.append(p);
                    a.append(li);
              }    
     
          } else {

               if (item.icon) {
                    
                    const li = document.createElement('li');
                    ulList.append(li);
                    const img = document.createElement('img');
                    img.src = item.icon;
                    const div = document.createElement('div');
                    div.className = item.name;
                    div.appendChild(img);
                    li.appendChild(div);

               } else {
                      
                    const li = document.createElement('li');
                    li.className = item.name;
                    const p = document.createElement('p');
                    p.innerText = item.text
                    li.append(p);
                    
                    ulList.append(li);
                 
               }    

          
          }
     };

};