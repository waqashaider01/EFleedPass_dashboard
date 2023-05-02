
<template>
    <div class="single__modle">
        <div class="model__head">
            <h4>Model Y <span>Active</span></h4>
            <ul>
                <li>
                    <a href="#">
                        <img src="../assets/img/icons/edit-line.svg" alt="vehicle-edit" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/img/icons/bx_block.svg" alt="bx_block" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/img/icons/carbon_view.svg" alt="carbon_view" />
                    </a>
                </li>
            </ul>
        </div>
        <div class="model__content">
            <div class="model__image">
                <img src="../assets/img/car-img.png" alt="car-img" />
            </div>
            <div class="model__text">
                <h3>Rego: ENX04M</h3>
                <p>Make Model: <small>2014</small></p>
                <p>Registered State: <small>NSW</small></p>
                <p>Color: <small> White</small></p>
                <p>Expirty Date: <small>12/05/2022</small></p>
                <p>Date: <small>12/04/2019 10:11</small></p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 768px) {

    /*Big smartphones [426px -> 600px]*/
    .model__content {
        display: flex;
        flex-direction: column;
    }
}
</style>
<script>
export default {
    name: 'VehicleCard',
}
</script>
