import styled from 'styled-components';


export const ListContContainer = styled.div`
      margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  
`
export const StyledUl = styled.ul`
display: flex;
flex-direction:column;
align-items: center;
gap:5px;
border-radius: 5px;
padding: 15px;
min-width: 320px;
list-style: none;
background:linear-gradient(66deg, #e38010, #1535bf);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`
export const ContactCard = styled.li`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 200px;
  background-color: rgb(236, 243, 243, 50%);
  border-radius: 5px;
  flex-wrap: wrap;
  flex-direction: column;
`


export const NumberStyled = styled.span`
  color: white;
  background-color:  #1535bf;
  border-radius: 5px;
  padding:2px;
`

export const DeletBtn = styled.button`
display: block;
width: 100%;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0,0,0,.5);
  user-select: none;
  padding: .3em 0.5em;
  border-radius: 5px;
  outline: none;
  background: rgb(147,80,36) linear-gradient(rgb(106,58,26), rgb(147,80,36) 80%);
  box-shadow:
   0 6px rgb(86,38,6),
   0 3px 15px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  transition: .2s;
&:hover {
  background: rgb(167,91,41) linear-gradient(rgb(126,69,31), rgb(167,91,41) 80%);
}
&:active {
  background: rgb(120,63,25) linear-gradient(rgb(120,63,25) 20%, rgb(167,91,41));
  box-shadow:
   0 2px rgb(86,38,6),
   0 1px 6px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  -webkit-transform: translate(0, 4px);
  transform: translate(0, 4px);
}
`
export const Name = styled.div`
  color:white;
  text-transform: uppercase;
  background-color: #c4935b;
  border-radius: 5px;
  padding:2px;
  
`
export const Email = styled.div`
  color:white;
  background-color: #c4935b;
  border-radius: 5px;
  padding:2px;
`  



export const ButtonBox = styled.div`
width: 100%;
 display: flex;
`  