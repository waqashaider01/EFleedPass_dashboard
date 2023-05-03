<template>
    <div class="container pt-3">
        <div class="row mt-5 mb-3 mx-1 align-items-center sub-head-row ">
            <div class="col-lg-6">
                <h5>Infringements - Outstanding</h5>
            </div>
            <div class="col-lg-6 d-flex my-2 justify-content-evenly align-items-center">

                <form class="d-flex sub-src">
                    <input class="form-control me-2 sub-src-input" type="search" placeholder="Search">
                    <button class="sub-src-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <router-link to="/infragmentnom"> <span class="eye">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4698 5.83C14.8817 4.30882 13.8608 2.99331 12.5332 2.04604C11.2056 1.09878 9.62953 0.561286 7.99979 0.5C6.37005 0.561286 4.79398 1.09878 3.46639 2.04604C2.1388 2.99331 1.11787 4.30882 0.529787 5.83C0.490071 5.93985 0.490071 6.06015 0.529787 6.17C1.11787 7.69118 2.1388 9.00669 3.46639 9.95396C4.79398 10.9012 6.37005 11.4387 7.99979 11.5C9.62953 11.4387 11.2056 10.9012 12.5332 9.95396C13.8608 9.00669 14.8817 7.69118 15.4698 6.17C15.5095 6.06015 15.5095 5.93985 15.4698 5.83ZM7.99979 10.5C5.34979 10.5 2.54979 8.535 1.53479 6C2.54979 3.465 5.34979 1.5 7.99979 1.5C10.6498 1.5 13.4498 3.465 14.4648 6C13.4498 8.535 10.6498 10.5 7.99979 10.5Z"
                                fill="#2388FF" />
                            <path
                                d="M8 3C7.40666 3 6.82664 3.17595 6.33329 3.50559C5.83994 3.83524 5.45543 4.30377 5.22836 4.85195C5.0013 5.40013 4.94189 6.00333 5.05765 6.58527C5.1734 7.16721 5.45912 7.70176 5.87868 8.12132C6.29824 8.54088 6.83279 8.8266 7.41473 8.94236C7.99667 9.05811 8.59987 8.9987 9.14805 8.77164C9.69623 8.54458 10.1648 8.16006 10.4944 7.66671C10.8241 7.17336 11 6.59334 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39992 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8Z"
                                fill="#2388FF" />
                        </svg>

                    </span></router-link>
                <span class="plus" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 3C6.13261 3 6.25979 3.05268 6.35355 3.14645C6.44732 3.24021 6.5 3.36739 6.5 3.5V5.5H8.5C8.63261 5.5 8.75979 5.55268 8.85355 5.64645C8.94732 5.74021 9 5.86739 9 6C9 6.13261 8.94732 6.25979 8.85355 6.35355C8.75979 6.44732 8.63261 6.5 8.5 6.5H6.5V8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9C5.86739 9 5.74021 8.94732 5.64645 8.85355C5.55268 8.75979 5.5 8.63261 5.5 8.5V6.5H3.5C3.36739 6.5 3.24021 6.44732 3.14645 6.35355C3.05268 6.25979 3 6.13261 3 6C3 5.86739 3.05268 5.74021 3.14645 5.64645C3.24021 5.55268 3.36739 5.5 3.5 5.5H5.5V3.5C5.5 3.36739 5.55268 3.24021 5.64645 3.14645C5.74021 3.05268 5.86739 3 6 3Z"
                            fill="#2388FF" />
                        <path
                            d="M0 6C-1.17411e-08 5.21207 0.155195 4.43185 0.456723 3.7039C0.758251 2.97595 1.20021 2.31451 1.75736 1.75736C2.31451 1.20021 2.97595 0.758251 3.7039 0.456723C4.43185 0.155195 5.21207 0 6 0C6.78793 0 7.56815 0.155195 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 2.37122e-08 7.5913 0 6ZM6 1C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 7.32608 1.52678 8.59785 2.46447 9.53553C3.40215 10.4732 4.67392 11 6 11C7.32608 11 8.59785 10.4732 9.53553 9.53553C10.4732 8.59785 11 7.32608 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1Z"
                            fill="#2388FF" />
                    </svg>
                </span>
                <span class="pdf">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.6424 6.1399C2.6424 5.8359 2.4312 5.6543 2.0588 5.6543C1.9068 5.6543 1.804 5.6691 1.75 5.6835V6.6599C1.814 6.6743 1.8924 6.6795 2 6.6795C2.3972 6.6795 2.6424 6.4783 2.6424 6.1399ZM4.9488 5.6639C4.782 5.6639 4.674 5.6787 4.61 5.6935V7.8567C4.674 7.8715 4.7768 7.8715 4.87 7.8715C5.5468 7.8763 5.9884 7.5035 5.9884 6.7139C5.9936 6.0271 5.5912 5.6639 4.9488 5.6639Z"
                            fill="#2388FF" />
                        <path
                            d="M9.3672 4.39232H9.096V3.08392C9.09578 3.0756 9.09497 3.06732 9.0936 3.05912C9.09404 3.00649 9.07543 2.95549 9.0412 2.91552L6.864 0.429115L6.8624 0.427516C6.83475 0.397512 6.79951 0.375538 6.7604 0.363916L6.7484 0.359916C6.73178 0.355772 6.71473 0.353624 6.6976 0.353516H1.3468C1.1024 0.353516 0.904 0.552316 0.904 0.796316V4.39232H0.6328C0.2832 4.39232 0 4.67552 0 5.02512V8.31632C0 8.66552 0.2836 8.94912 0.6328 8.94912H0.904V11.2023C0.904 11.4463 1.1024 11.6451 1.3468 11.6451H8.6532C8.8972 11.6451 9.096 11.4463 9.096 11.2023V8.94912H9.3672C9.7168 8.94912 10 8.66552 10 8.31632V5.02512C10 4.67552 9.7164 4.39232 9.3672 4.39232ZM1.3468 0.796316H6.476V3.06192C6.476 3.18432 6.5752 3.28312 6.6976 3.28312H8.6536V4.39232H1.3468V0.796316ZM6.7828 6.68832C6.7828 7.32112 6.5524 7.75792 6.2328 8.02752C5.8848 8.31672 5.3552 8.45432 4.7076 8.45432C4.32 8.45432 4.0456 8.42952 3.8588 8.40552V5.15792C4.1336 5.11392 4.4916 5.08952 4.8696 5.08952C5.4972 5.08952 5.9044 5.20232 6.2232 5.44272C6.5668 5.69752 6.7828 6.10472 6.7828 6.68832ZM1.0084 8.42032V5.15792C1.2388 5.11872 1.5628 5.08952 2.0188 5.08952C2.48 5.08952 2.8088 5.17792 3.0292 5.35432C3.24 5.52112 3.382 5.79592 3.382 6.11952C3.382 6.44352 3.2744 6.71792 3.078 6.90432C2.8228 7.14472 2.4452 7.25272 2.0036 7.25272C1.9056 7.25272 1.8172 7.24792 1.7488 7.23792V8.42032H1.0084ZM8.6532 11.0823H1.3468V8.94912H8.6532V11.0823ZM9.2948 5.72712H8.024V6.48272H9.2112V7.09112H8.024V8.42032H7.274V5.11392H9.2948V5.72712Z"
                            fill="#2388FF" />
                    </svg>

                </span>


            </div>
        </div>
        <div class="row">
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
            <div class="col-md-4 my-2 ">
                <InfragmentOutCard />
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Setup Revenue</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3 d-flex justify-content-between ">
                        <div class="me-2 w-100"> <label for="select modalLabel">Vehicle Owner *</label>
                            <input type="email" class="form-control formInput" id="exampleFormControlInput1"
                                placeholder="Reciepent Email">
                        </div>
                        <span class="d-flex align-items-center pt-3">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="white" />
                                <g clip-path="url(#clip0_1411_10593)">
                                    <path
                                        d="M20.4445 21.3332H10.6667V11.5554H16.5423L17.4312 10.6665H10.6667C10.431 10.6665 10.2049 10.7602 10.0382 10.9269C9.87148 11.0936 9.77783 11.3196 9.77783 11.5554V21.3332C9.77783 21.5689 9.87148 21.795 10.0382 21.9617C10.2049 22.1284 10.431 22.2221 10.6667 22.2221H20.4445C20.6802 22.2221 20.9063 22.1284 21.073 21.9617C21.2397 21.795 21.3334 21.5689 21.3334 21.3332V14.6665L20.4445 15.5554V21.3332Z"
                                        fill="#2388FF" />
                                    <path
                                        d="M22.9023 10.5957L21.4046 9.09797C21.3381 9.03132 21.2591 8.97843 21.1722 8.94235C21.0852 8.90627 20.992 8.8877 20.8979 8.8877C20.8038 8.8877 20.7106 8.90627 20.6236 8.94235C20.5367 8.97843 20.4577 9.03132 20.3912 9.09797L14.2979 15.2269L13.8046 17.3646C13.7835 17.4683 13.7858 17.5753 13.811 17.6779C13.8363 17.7806 13.884 17.8764 13.9507 17.9584C14.0175 18.0404 14.1015 18.1067 14.1969 18.1523C14.2923 18.198 14.3966 18.2219 14.5023 18.2224C14.557 18.2284 14.6121 18.2284 14.6668 18.2224L16.8223 17.7469L22.9023 11.6091C22.969 11.5426 23.0219 11.4636 23.058 11.3767C23.094 11.2898 23.1126 11.1965 23.1126 11.1024C23.1126 11.0083 23.094 10.9151 23.058 10.8281C23.0219 10.7412 22.969 10.6622 22.9023 10.5957ZM16.3601 16.9246L14.7334 17.2846L15.1112 15.6713L19.6979 11.0535L20.9512 12.3069L16.3601 16.9246ZM21.4535 11.8046L20.2001 10.5513L20.889 9.84908L22.1512 11.1113L21.4535 11.8046Z"
                                        fill="#2388FF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1411_10593">
                                        <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>


                    </div>
                    <div class="mb-3 d-flex justify-content-between ">
                        <div class="me-2 w-100"> <label for="select modalLabel">RMS Customer Number *</label>
                            <input type="email" class="form-control formInput" id="exampleFormControlInput1"
                                placeholder="RMS Customer Number">
                        </div>
                        <span class="d-flex align-items-center pt-3">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="white" />
                                <path
                                    d="M16 13C16.1326 13 16.2598 13.0527 16.3536 13.1464C16.4473 13.2402 16.5 13.3674 16.5 13.5V15.5H18.5C18.6326 15.5 18.7598 15.5527 18.8536 15.6464C18.9473 15.7402 19 15.8674 19 16C19 16.1326 18.9473 16.2598 18.8536 16.3536C18.7598 16.4473 18.6326 16.5 18.5 16.5H16.5V18.5C16.5 18.6326 16.4473 18.7598 16.3536 18.8536C16.2598 18.9473 16.1326 19 16 19C15.8674 19 15.7402 18.9473 15.6464 18.8536C15.5527 18.7598 15.5 18.6326 15.5 18.5V16.5H13.5C13.3674 16.5 13.2402 16.4473 13.1464 16.3536C13.0527 16.2598 13 16.1326 13 16C13 15.8674 13.0527 15.7402 13.1464 15.6464C13.2402 15.5527 13.3674 15.5 13.5 15.5H15.5V13.5C15.5 13.3674 15.5527 13.2402 15.6464 13.1464C15.7402 13.0527 15.8674 13 16 13Z"
                                    fill="#2388FF" />
                                <path
                                    d="M10 16C10 15.2121 10.1552 14.4319 10.4567 13.7039C10.7583 12.9759 11.2002 12.3145 11.7574 11.7574C12.3145 11.2002 12.9759 10.7583 13.7039 10.4567C14.4319 10.1552 15.2121 10 16 10C16.7879 10 17.5681 10.1552 18.2961 10.4567C19.0241 10.7583 19.6855 11.2002 20.2426 11.7574C20.7998 12.3145 21.2417 12.9759 21.5433 13.7039C21.8448 14.4319 22 15.2121 22 16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.4087 22 12.8826 21.3679 11.7574 20.2426C10.6321 19.1174 10 17.5913 10 16ZM16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11Z"
                                    fill="#2388FF" />
                            </svg>

                        </span>


                    </div>
                    <div class="mb-3 d-flex justify-content-between ">
                        <div class="me-2 w-100"> <label for="select modalLabel">Representative's Signature *</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <small class="text-muted pt-2">Note: Remember to add additional Customer Numbers related to your
                                fleet of vehicles</small>
                        </div>
                        <span class="d-flex align-items-center pt-3">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="white" />
                                <path
                                    d="M22.719 16.286L18.7265 12.293C18.5389 12.1055 18.2845 12.0002 18.0192 12.0002C17.754 12.0002 17.4996 12.1055 17.312 12.293L14.633 14.972L12.5 9H11.5L9 16H10L10.4995 14.5H13.4995L13.901 15.704L10.293 19.312C10.2001 19.4049 10.1264 19.5151 10.0761 19.6365C10.0258 19.7578 9.99996 19.8879 9.99996 20.0192C9.99996 20.1506 10.0258 20.2807 10.0761 20.402C10.1264 20.5234 10.2001 20.6336 10.293 20.7265L12.566 23H17.361L22.719 17.6415C22.8081 17.5525 22.8787 17.4468 22.927 17.3305C22.9752 17.2141 23 17.0894 23 16.9635C23 16.8376 22.9752 16.7129 22.927 16.5965C22.8787 16.4802 22.8081 16.3745 22.719 16.2855V16.286ZM10.8325 13.5L11.998 10L13.166 13.5H10.8325ZM16.9475 22H12.98L11 20.019L14.156 16.8635L18.12 20.827L16.9475 22ZM18.8275 20.12L14.8635 16.1565L18.0195 13L21.983 16.9635L18.8275 20.12Z"
                                    fill="#2388FF" />
                            </svg>


                        </span>


                    </div>
                </div>
                <div class="my-3 d-flex justify-content-center">

                    <button type="button" class="btn  sendBtn">Submit</button>
                </div>
                <div class="modal-footer mf">
                    <div class="d-flex justify-content-center w-100">
                        <p class="prC text=center">Current Customer Numbers</p>
                    </div>
                    <div class="table-responsive my-2">
                        <table class="table table-striped">
                            <tr>
                                <td>1</td>
                                <td>9872 3434 3431</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>9872 3434 3431</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.mf {
    display: block !important;
}

.prC {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */

    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 100% */

    color: #000000;

}

.formInput {
    /* width: 25rem !important */
}

.modalLabel {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */


    /* Black 100% */

    color: #000000;
}

.stSelect {
    width: 100% !important;
    max-width: 100% !important
}

.sendBtn {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 10px 16px !important;
    gap: 10px !important;



    background: #083EA1 !important;
    border-radius: 4px !important;
    color: #fff;
    font-weight: 600 !important;
}

.modal-content {
    border: 1px solid #E8E8E8 !important;
    border-radius: 14px !important;
}

.modal-header {
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
</style>
  
<script>
import InfragmentOutCard from "../components/InFragmentOutCard.vue";
export default {
    name: 'InfragmentOutView',
    components: {
        InfragmentOutCard, // Register the component here
    },
}

</script>
  