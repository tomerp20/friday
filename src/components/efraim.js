import * as React from 'react';
import './efraim.css'
import Cube from 'react-3d-cube';
class LogoCube extends React.Component {
    render() {
      return (
      <center>
              <div>
                  <div
                      style={{
                          width: 300,
                          height: 300
                      }}
                  >
                  <Cube size={300} index="front">
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://i.guim.co.uk/img/media/f9aa3102e5034e03db357bfa18665b439e77a43c/0_261_4314_2589/master/4314.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6395966753a631e965a8d070e930eede"></img>
                      </div>
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://www.thesenior.com.au/images/transform/v1/crop/frm/silverstone-feed-data/213ae3d0-5afe-4881-9259-9b24b2312c63.jpg/r0_0_800_600_w1200_h678_fmax.jpg"></img>
                      </div>
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://resources.afl.com.au/photo-resources/2021/08/07/13d674c6-a2d4-428f-bffa-00f69f98f53c/uE63Dp7c.jpg?width=952&height=592"></img>
                      </div>
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://www.comparetv.com.au/wp-content/uploads/2019/03/richmond-tigers-1.jpg"></img>
                      </div>
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://www.redlandcitybulletin.com.au/images/transform/v1/crop/frm/silverstone-feed-data/9902aa41-5229-475c-8a83-a35722386575.jpg/r0_0_800_600_w1200_h678_fmax.jpg"></img>
                      </div>
                      <div >
                          <img style={{width: '300px', height: '300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjbA-BkyxCgWgzyNmVPejuDURgQ5mUEFj3EpEQfPU6_nVp16MKH5TI0zAWEZx81nl2wY&usqp=CAU"></img>
                      </div>
                  </Cube>
                  </div>
              </div>
          </center>)}}
export default LogoCube