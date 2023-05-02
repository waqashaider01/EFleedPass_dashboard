

<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Add New Ticket</h4>
                <div class="dashboard__filter-right">
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/carbon_view.png" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- corporate__widgets -->
            <div class="corporate__widgets">
                <!-- corporate from title -->
                <!-- <div class="corporate__from__title">
                                                                                                                                                                                                                                                                                                                                <h4>Complete Corporate Customer Rental</h4>
                                                                                                                                                                                                                                                                                                                            </div> -->
                <!-- corporate from -->
                <div class="corporate_from d-sm-block d-md-grid">
                    <div class="corporate_single_info">
                        <label for="Rental">Serial Number: *</label>
                        <input type="text" class="form-control" id="Rental" placeholder="Serial Number" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="RSelect">Cost: *</label>
                        <input type="text" class="form-control" id="RSelect" placeholder="Cost" />
                    </div>
                    <div class="corporate_single_info upload p-2 d-flex">
                        <label for="file" @click="openFileBrowser">
                            <button class="btn btn-info">Upload</button>
                        </label>
                        <input type="file" ref="fileInput" class="d-none" id="file" @change="handleFileUpload">
                        <p class="mx-2 mt-2">{{ selectedFile ? selectedFile.name : 'No file chosen' }}</p>

                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-4">
                            <label for="duedatetime">Description: </label>
                            <div class="form-group">


                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    columns="100"></textarea>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="corporate_btns">
                    <button type="submit" class="btns">
                        <img src="../assets/img/icons/arrow-reset.png" alt="arrow-reset" />
                        Reset
                    </button>
                    <button type="submit" class="btns confirm">
                        <img src="../assets/img/icons/circle-check.png" alt="circle-checkt" />
                        Confirm Details
                    </button>
                </div>
            </div>
        </div>
    </seciton>
</template>
<script>
export default {
    data() {
        return {
            selectedFile: null
        }
    },
    methods: {
        openFileBrowser() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        }
    }
}
</script>
<style scoped>
.form-check-input:checked {
    background-color: #FF2D46 !important;
    z-index: -11;
}

.f2:checked {
    background-color: green !important;
    ;
}

.cancel {
    background: #F4F4F4 !important;
    border-radius: 4px !important;
}

.send {
    background: #2388FF !important;
    border-radius: 4px !important;
}

.save {
    background: #083EA1 !important;
    border-radius: 4px !important;
}

.upload {
    margin: 14px 0px 39px 7px !important;

}
</style>