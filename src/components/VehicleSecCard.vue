
<template>
    <!-- single Vechicles -->
    <div class="single__vechicles">
        <div class="single__vechicles-head">
            <h4>ENX04M <span>Active</span></h4>
            <!-- Vechicles actions -->
            <div class="dashboard__filter-icons">
                <ul>
                    <li>
                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img src="assets/img/icons/edit-line.svg" alt="icon" />
                        </a>
                    </li>
                    <li>

                 

                        <router-link to="/vehicletracker">
                            <img src="assets/img/icons/codicon_location.svg" alt="icon" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/vehicleppsr">
                            <img src="assets/img/icons/check-circle-outlined.svg" alt="icon" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/vehiclecondtion">
                            <img src="assets/img/icons/bullet-list-20-regular.svg" alt="icon" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="assets/img/icons/delete.svg" alt="icon" />
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- single__vechicles-body -->
        <div class="single__vechicles-body">
            <div class="vechicles__body-img">
                <img src="assets/img/cars/White-Tesla-Model-S-PNG-File 1.png" alt="cars" />
            </div>
            <div class="vechicles__body-text">
                <div class="vechicles__body-textSolo">
                    <h4>Rego: ENX04M</h4>
                    <p>Make Model: <small>Ford GT</small></p>
                    <p>Registered State: <small>NSW</small></p>
                    <p>Year: <small>2021</small></p>
                    <p>Expirty Date:<small> 12/05/2022</small></p>
                </div>
                <div class="vechicles__body-textSolo">
                    <h4>Telemetry Information</h4>
                    <p>Status: <small>Locked</small></p>
                    <div class="vechicles__body-list">
                        <ul>
                            <li>
                                <img src="assets/img/icons/fire-outlined.svg" alt="icon" />
                                80%
                            </li>
                            <li>
                                <img src="assets/img/icons/add-road.svg" alt="icon" />
                                73134.43
                            </li>
                            <li>
                                <img src="assets/img/icons/settings-line.svg" alt="icon" />
                                OK
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VehicleSecCard',
}
</script>
