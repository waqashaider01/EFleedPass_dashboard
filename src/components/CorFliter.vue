
<template>
    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <router-link to="/coporatelist" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-custom-class="custom-tooltip" data-bs-title="View Corporate Lists">
                                    <img src="assets/img/icons/carbon_view.png" alt="icon" />
                            </router-link>
                            </li>
                            <li>
                                <router-link to="/completecorporaterental"><img src="assets/img/icons/plus.svg" alt="icon" /></router-link>
                            
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/document.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                               <router-link to="/createdbackdated"> <img src="assets/img/icons/clipboard.svg" alt="icon" /></router-link>
                                   
                               
                            </li>
                        </ul>
                    </div>
</template>

<script >
export default {
    name: 'CorFliter',
}
</script>
