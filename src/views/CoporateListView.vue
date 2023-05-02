

<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!-- Dashboard Content -->
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Corporate Accounts</h4>
                <div class="dashboard__filter-right">
                    <!-- search bar -->
                    <div class="dashboard__filter-search">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                            <img src="../assets/img/icons/Search.svg" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                     <corFliter/>
                  
                </div>
            </div>
            <div class="corporate__widget">
                <div class="corporate__single__items">
                    <div class="corporate__single__items_header">
                        <div class="person__info">
                            <img src="assets/img/linda-roy.png" alt="icon" />
                            <h4>Linda Roy</h4>
                        </div>
                        <!-- filter icons -->
                         
                         <div class="dashboard__filter-icons">
                            <ul>
                                <li>
                                  
                                         <router-link to="/assignedvehicle"><img src="../assets/img/icons/i-icon.svg" alt="icon" /></router-link>
                                 
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/edit-line.svg" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/delete.svg" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/login.svg" alt="icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                    <div class="corporate_single__item_body d-sm-block d-md-grid">
                        <div class="corporate_item_img">
                            <img src="assets/img/unlimitate-rentails.png" alt="unlimitate-rentails" />
                        </div>
                        <div class="corporate_body_text">
                            <h4>Personal Information</h4>
                            <p><span>Email:</span> frank@ulimaterentals.com.au</p>
                            <p><span>Phone:</span> 744 564 564 56</p>
                        </div>
                        <div class="corporate_body_text">
                            <h4>Corporate Information</h4>
                            <p><span>Name:</span> Ultimate Luxury Cars Pty Ltd</p>
                            <p><span>Address: </span> Princes Highway 139 Arncliffe</p>
                        </div>
                    </div>
                </div>
                <div class="corporate__single__items">
                    <div class="corporate__single__items_header">
                        <div class="person__info">
                            <img src="assets/img/lisa-franco.png" alt="lisa-franco" />
                            <h4>Lisa Franco</h4>
                        </div>
                        <!-- filter icons -->
                        <div class="dashboard__filter-icons">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/i-icon.svg" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/edit-line.svg" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/delete.svg" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/icons/login.svg" alt="icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="corporate_single__item_body d-sm-block d-md-grid">
                        <div class="corporate_item_img corporate_img_bg">
                            <img src="assets/img/Simba_Final.png" alt="Simba_Fina" />
                        </div>
                        <div class="corporate_body_text">
                            <h4>Personal Information</h4>
                            <p><span>Email:</span> lisa@simbacarhire.com.au</p>
                            <p><span>Phone:</span> 744 564 564 56</p>
                        </div>
                        <div class="corporate_body_text">
                            <h4>Corporate Information</h4>
                            <p><span>Name:</span> Simba Car Hire Pty Limited</p>
                            <p><span>Address: </span> Princes Highway 139 Arncliffe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
<script>
 // eslint-disable-next-line no-unused-vars
import CorFliter from '../components/CorFliter.vue'


export default {
    name: 'CorporateListView',
   
    components: {
        CorFliter // Register the component here
    },
}
</script>
