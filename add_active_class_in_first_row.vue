<div v-for="(servicedetails,key,index) in getServices" :class="['tab-pane fade',(key == 0 ? 'show active':' ')]" :id="'pills-home'+servicedetails.id" role="tabpanel">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="panel_content text-center">
                                        <img :src="'public/images/services/'+servicedetails.image" style="width: 200px;height: auto;"
                                            alt="image">
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="panel_descrip">
                                        <h4>{{servicedetails.name}}</h4>
                                        <ul>
                                            <li class="sub_panel" v-for="details in servicedetails.details"><i class="fas fa-check"></i>
                                                {{details}}
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
