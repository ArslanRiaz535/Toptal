import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
        <Box py={10} mt={8} bgcolor='#0f256e' color='white'>
          <Container  maxWidth={false} sx={{width: '1250px', maxWidth: '100%', marginTop:'10px'}}>
             <Grid container spacing={4}>
               <Grid item md={3} sm={6} xs={12}>
                  <Box>
                    <Typography fontSize='17px' fontWeight={600}>Hire Talent</Typography>
                    <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px',opacity:'0.5'}}/>
                    <Box display='flex' flexDirection='column'>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Marketers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Product Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Project Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Hire Freelance Finance Experts</Typography>
                    </Box>
                  </Box>
               </Grid>
               <Grid item md={6} sm={6} xs={12} >
                 <Grid container >
                 <Grid item md={6} sm={6} xs={12} >
                 <Box>
                    <Typography fontSize='17px' fontWeight={600}>Featured Skills</Typography>
                    <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px',opacity:'0.5'}}/>
                    <Box display='flex' flexDirection='column'>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Software Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Web Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Mobile App Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>iOS Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>AI Engineers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Node.js Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>PHP Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>React.js Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>AngularJS Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Python Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Full-stack Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Front-end Developers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>UX Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>UI Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Web Designers</Typography>
                    </Box>
                  </Box>
                 </Grid>
                 <Grid item md={6} sm={6} xs={12} >
                 <Box>
                    <Typography fontSize='17px' fontWeight={600} sx={{opacity:'0.1', color:'#0f256e'}}>Hire Talent</Typography>
                    <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px' ,opacity:'0.5'}}/>
                    <Box display='flex' flexDirection='column'>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Mobile App Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Graphic Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Brand Designers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>SEO Experts</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Content Creators</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Fractional CMOs</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Growth Product Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Digital Product Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Technical Product Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Product Consultants</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Technical Project Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Web Project Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Mobile Project Managers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Startup Funding Consultants</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>M&A Consultants</Typography>
                    </Box>
                  </Box>
                 </Grid>

                 </Grid>
               </Grid>
               <Grid item md={3} sm={6} xs={12}>
                  <Box>
                    <Typography fontSize='17px' fontWeight={600}>About</Typography>
                    <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px', opacity:'0.5'}}/>
                    <Box display='flex' flexDirection='column'>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Why Toptal</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Contact Us</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Press Center</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Careers</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>FAQ</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>Community</Typography>
                       <Typography sx={{'&:hover':{color:'#939AC3'}, cursor:'pointer'}} mt={2} fontSize='15px'>About Us</Typography>
                    </Box>
                  </Box>
               </Grid>
             </Grid>
             <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px', opacity:'0.5'}}/>
             <Box display='flex'>
             <Grid container >
             <Grid item md={6} sm={6} xs={12} display='flex' alignItems='center'>
               <Box mt={4} sx={{borderRight:'1px solid #939AC3', cursor:'pointer'}}>
               <svg height="32" viewBox="0 0 23 32" width="23" xmlns="http://www.w3.org/2000/svg" aria-labelledby="toptal-emblem-icon-label-footer-logo"><title id="toptal-emblem-icon-label-footer-logo">Toptal emblem</title><path d="m1323.82532 2153 7.29254 7.29278c.05306.04705.10612.09998.16507.15879l6.36107 6.36354-10.34632 10.29222 4.73985 4.74031-3.17169 3.15236-7.24537-7.24573c-.08254-.07645-.17097-.16467-.2594-.25289l-6.36107-6.35766 10.31095-10.25105-4.69859-4.69914zm4.61606 11.42731c-.09433-.02941-.18865-.02941-.28298 0-.09433.02353-.17686.07058-.34193.23525l-5.88945 5.86363c-.17096.17056-.21223.24701-.2417.34111-.02948.0941-.02948.1882 0 .2823.02947.09411.07664.17644.2417.34112l1.86883 1.87024c.17096.17056.2476.21173.34193.24114.09432.0294.18865.0294.28297 0 .09433-.02941.17686-.07058.33604-.23526l5.88944-5.86362c.17097-.17056.21224-.24702.24171-.34112.02948-.0941.02948-.1882 0-.2823-.02358-.0941-.07074-.17644-.23581-.34111l-1.86882-1.87025c-.17097-.17055-.24761-.21172-.34193-.24113z" fill="white" fill-rule="evenodd" transform="translate(-1315 -2153)"></path></svg>
                <svg height="29" viewBox="0 0 84 29" width="84" xmlns="http://www.w3.org/2000/svg" aria-labelledby="toptal-wordmark-icon-label-footer-logo"><title id="toptal-wordmark-icon-label-footer-logo">Toptal brand logo</title><path d="m940.151241 2159.9452c2.29703 0 4.252834.88546 5.817478 2.60625 1.581288 1.67068 2.380255 3.9595 2.371997 6.808-.008387 2.79003-.823999 5.22086-2.438578 6.94166-1.597934 1.71244-3.636964 2.58119-6.067155 2.58119-2.105232-.00797-4.005718-.76184-5.267151-2.05819l-.17581-.18886-.016645 7.35097-4.152963-.00836v-.30907l.049935-23.51476 4.127995.00836-.008322 2.8652c1.356579-1.52866 3.545415-3.08239 5.759219-3.08239zm26.598938.05847c2.371933 0 4.01148.53462 5.268188 1.57044 1.204791 1.0024 1.85097 2.78521 1.902658 4.66292l.00329.28228-.025047 12.1291h-4.202898l-.00013-.50982c-.000391-.51765-.001951-1.05644-.008193-1.59523-1.215095 1.68738-2.9129 2.50601-5.176639 2.50601-1.797676 0-3.312384-.54297-4.427608-1.55373-1.123547-1.02746-1.722773-2.43083-1.714536-4.06809.016313-3.07864 2.192423-5.20436 6.003868-5.87392l.296405-.04863 5.043478-.79357v-.40096c0-.85204-.249677-1.87951-.749032-2.29718-.515999-.43437-1.131869-.80192-2.213804-.80192-2.969539 0-3.571224 2.19502-3.60236 3.29187l-.001313.09125-3.728512.05012c0-1.62056.749031-3.71726 2.272062-5.03709 1.214116-1.05351 2.988523-1.54465 4.705687-1.59879l.321146-.00506zm-16.287272-4.74472 4.136318.00836-.008322 4.95355 3.845028.00835-.008323 3.44995-3.845028-.00836-.016645 9.29731c0 1.01912.216387 1.68739.657483 2.00481.466064.33414 1.414837.02506 1.414837.02506l.374516 3.61702s-1.306644.33413-2.138901.33413c-1.081934 0-1.997417-.27566-2.713158-.81863-1.148515-.86875-1.739418-2.39742-1.731095-4.53588l.016645-9.92382-3.470512-3.46665 3.478835.00836zm-24.435069 7.4011c1.190127 1.2363 2.613287 3.41653 2.605001 6.808-.008359 3.39147-1.431519 5.56335-2.621647 6.79129-1.631224 1.67068-3.845028 2.63132-6.075477 2.63132-.091548 0-.183096 0-.274645-.00836-2.388578-.00835-4.494188-.86039-6.258573-2.53107-1.772708-1.68738-2.671546-4.00962-2.671546-6.92495s.907161-5.23757 2.688191-6.91659c1.756062-1.66233 3.861673-2.50602 6.250251-2.50602 2.36361-.06682 4.668963.90217 6.358445 2.65638zm-9.587603-7.66005v4.10151l-8.006313.00835.016645 19.55526-4.319415-.00836v-.3759l.033291-19.17935h-8.164443l.008323-4.10151zm59.481418.27566 3.728512.00835v.10025l-.041613 23.2558-3.720189-.00836v-.10859zm-6.208638 14.76877-4.144641.70168c-2.022385.34249-2.962835 1.13606-2.971211 2.49766-.007925 1.25684.886031 2.09173 2.271715 2.16647l.183497.00541h.016645c2.649863 0 4.534366-2.07491 4.639398-5.08349l.004597-.24596zm-50.06859-6.34856c-1.389869 0-2.596642.53461-3.570383 1.59549-.957096 1.04417-1.448127 2.43919-1.448127 4.15163s.491031 3.10745 1.439805 4.15163c.97374 1.06923 2.180513 1.60384 3.570383 1.6122 1.414837 0 2.629932-.53462 3.603673-1.5955.982064-1.06923 1.473095-2.46424 1.481418-4.15163.008322-1.69573-.491032-3.09074-1.473095-4.15162-.973741-1.06924-2.188837-1.6122-3.603674-1.6122zm19.51643.1253h-.016645c-1.389869 0-2.546707.50955-3.52877 1.56208-.973741 1.01911-1.464773 2.3473-1.473095 3.95114 0 1.62056.482709 3.07405 1.464772 4.13493.998709 1.02746 2.155546 1.53702 3.537093 1.53702 1.406515 0 2.58832-.51791 3.537093-1.52867.990386-1.05253 1.464772-2.50601 1.473095-4.12657.008323-1.6122-.491032-2.94039-1.45645-3.95115-.940451-1.04417-2.130578-1.57878-3.537093-1.57878z" fill="white" fill-rule="evenodd" transform="translate(-896 -2155)"></path></svg>
                <span style={{marginLeft:'2px', marginRight:'16px'}}>®</span>
               </Box>
                <Typography ml={2} mt={4} fontSize='15px'>The World’s Top Talent, On Demand</Typography>

             </Grid>

             </Grid>
             <Box display='flex' gap={2} mt={4}>
                <Box sx={{border:'1px solid #939AC3', borderRadius:'50%', padding:'10px', cursor:'pointer', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <svg width="18" height="18" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg"><path d="M.215 16h3.643V5.204H.215V16zM2.06 0C.814 0 0 .806 0 1.865 0 2.903.792 3.73 2.013 3.73h.025c1.27 0 2.06-.827 2.06-1.865C4.075.805 3.308 0 2.06 0zM17 9.808V16h-3.645v-5.777c0-1.45-.526-2.44-1.847-2.44-1.007 0-1.603.667-1.87 1.313-.095.23-.12.553-.12.874V16H5.875s.05-9.782 0-10.796h3.645v1.53c-.007.012-.018.023-.025.036h.025v-.037c.485-.734 1.348-1.782 3.284-1.782C15.2 4.951 17 6.493 17 9.808z" fill="white" fill-rule="evenodd"></path></svg>
                </Box>
                <Box sx={{border:'1px solid #939AC3', borderRadius:'50%', padding:'10px', cursor:'pointer', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <svg width="18" height="18" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg"><path d="M18.862 4.84c0-.19-.01-.369-.018-.557A8.445 8.445 0 0 0 21 2.1a8.609 8.609 0 0 1-2.475.638A4.188 4.188 0 0 0 20.419.41a8.522 8.522 0 0 1-2.734.988A4.39 4.39 0 0 0 14.543 0a4.236 4.236 0 0 0-4.312 4.243c0 .335.035.661.113.979C6.76 5.002 3.584 3.245 1.462.59a4.295 4.295 0 0 0-.587 2.174c0 1.51.763 2.851 1.921 3.636A4.313 4.313 0 0 1 .84 5.835v.059a4.379 4.379 0 0 0 3.463 4.282 4.34 4.34 0 0 1-1.134.146 4.405 4.405 0 0 1-.814-.09 4.324 4.324 0 0 0 4.025 3.032A8.619 8.619 0 0 1 0 15.038 12.048 12.048 0 0 0 6.606 17c7.92 0 12.256-6.514 12.256-12.16" fill="white" fill-rule="evenodd"></path></svg>
                </Box>
                <Box sx={{border:'1px solid #939AC3', borderRadius:'50%', padding:'10px', cursor:'pointer', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <svg width="18" height="18" viewBox="0 0 11 23" xmlns="http://www.w3.org/2000/svg"><path d="M6.271 23V11.488h3.892l.619-3.818h-4.51V5.756c0-1 .334-1.947 1.796-1.947H11V0H6.843C3.348 0 2.396 2.251 2.396 5.36v2.31H0v3.818h2.396V23H6.27z" fill="white" fill-rule="evenodd"></path></svg>
                </Box>
                <Box sx={{border:'1px solid #939AC3', borderRadius:'50%', padding:'10px', cursor:'pointer', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <svg width="18" height="18" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-rule="evenodd"><path d="M18.225 15.204c0 2.17-1.68 3.932-3.744 3.932H5.519c-2.064 0-3.744-1.762-3.744-3.932v-9.41c0-2.168 1.68-3.93 3.744-3.93h8.962c2.064 0 3.744 1.762 3.744 3.93v9.41zM14.481 0H5.519C2.475 0 0 2.599 0 5.794v9.41C0 18.401 2.475 21 5.52 21h8.96c3.045 0 5.52-2.599 5.52-5.796v-9.41C20 2.599 17.525 0 14.48 0z"></path><path d="M10 14.931a3.936 3.936 0 0 1-3.933-3.932A3.938 3.938 0 0 1 10 7.064a3.937 3.937 0 0 1 3.933 3.935A3.936 3.936 0 0 1 10 14.93M10 5c-3.308 0-6 2.69-6 5.999A6.008 6.008 0 0 0 10 17c3.308 0 6-2.694 6-6.001A6.006 6.006 0 0 0 10 5M14.501 3c-.394 0-.783.158-1.06.438-.278.28-.441.666-.441 1.06 0 .395.163.782.44 1.062.278.277.667.44 1.061.44.395 0 .781-.163 1.059-.44.28-.28.44-.667.44-1.061A1.498 1.498 0 0 0 14.501 3"></path></g></svg>
                </Box>
             </Box>
             </Box>
             <Divider sx={{backgroundColor:'#939AC3', marginTop:'18px', opacity:'0.5'}}/>
             <Box align='center'>
             <Typography ml={2} mt={4} fontSize='15px'>Copyright 2010 - 2024 Toptal, LLC  <span style={{'&:hover':{color:'#939AC3'}, cursor:'pointer', marginLeft:'19px', fontSize:'13px'}}>Privacy Policy</span> <span style={{'&:hover':{color:'#939AC3'}, cursor:'pointer', marginLeft:'19px', fontSize:'13px'}}>Website Terms</span>  <span style={{'&:hover':{color:'#939AC3'}, cursor:'pointer', marginLeft:'19px', fontSize:'13px'}}>Accessibility</span></Typography>
             </Box>
             
          </Container>
        </Box>
    </>
  )
}

export default Footer