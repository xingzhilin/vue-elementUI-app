<template>
	<div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline-message="inlineMessage">
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td><span class="red">*</span> 事件名称</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-select v-model="ruleForm.value" placeholder="请选择" >
    								    <el-option
    								      v-for="item in options"
    								      :key="item.value"
    								      :label="item.label"
    								      :value="item.value">
    								    </el-option>
    								 </el-select>
    								 <input type="hidden" v-model="ruleForm.img">
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    		  		</tbody>
    		  	</table>
    		  	<div class="tableTile">审批</div>
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td><span class="red">*</span> 事件图标</td>
    			  			<td>
    			  				<el-form-item  prop="img">
    								<el-upload
    								  class="avatar-uploader"
    								  action="https://jsonplaceholder.typicode.com/posts/"
    								  :show-file-list="false"
    								  :on-success="handleAvatarSuccess"
    								  :on-preview="handlePictureCardPreview"
    	  							  :on-remove="handleRemove"
    	  							  :on-change="handleChange"
    								  :before-upload="beforeAvatarUpload">
    								  <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
    								  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    								</el-upload>
    							</el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件简称</td>
    			  			<td>
    							<el-form-item  prop="name">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    					             	<el-input size="small" v-model="ruleForm.name"></el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件内容</td>
    			  			<td>
    							<el-form-item prop="textarea">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    									<el-input
    									  type="textarea"
    									  :rows="4"
    									  placeholder="请输入内容"
    									  resize="none"
    									  v-model="ruleForm.textarea">
    									</el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>链接</td>
    			  			<td>
    							<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    				             	<el-input size="small" v-model="ruleForm.url"></el-input>
    				            </el-col>
    			  			</td>
    			  		</tr>
    		  		</tbody>
    		  	</table>
    		  	<div class="tableTile">驳回</div>
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td><span class="red">*</span> 事件图标</td>
    			  			<td>
    			  				<el-form-item  prop="img">
    								<el-upload
    								  class="avatar-uploader"
    								  action="https://jsonplaceholder.typicode.com/posts/"
    								  :show-file-list="false"
    								  :on-success="handleAvatarSuccess"
    								  :on-preview="handlePictureCardPreview"
    	  							  :on-remove="handleRemove"
    	  							  :on-change="handleChange"
    								  :before-upload="beforeAvatarUpload">
    								  <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
    								  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    								</el-upload>
    							</el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件简称</td>
    			  			<td>
    							<el-form-item  prop="name">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    					             	<el-input size="small" v-model="ruleForm.name"></el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件内容</td>
    			  			<td>
    							<el-form-item prop="textarea">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    									<el-input
    									  type="textarea"
    									  :rows="4"
    									  placeholder="请输入内容"
    									  resize="none"
    									  v-model="ruleForm.textarea">
    									</el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>链接</td>
    			  			<td>
    							<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    				             	<el-input size="small" v-model="ruleForm.url"></el-input>
    				            </el-col>
    			  			</td>
    			  		</tr>
    		  		</tbody>
    		  	</table>
    		  	<div class="tableTile">成功</div>
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td><span class="red">*</span> 事件图标</td>
    			  			<td>
    			  				<el-form-item  prop="img">
    								<el-upload
    								  class="avatar-uploader"
    								  action="https://jsonplaceholder.typicode.com/posts/"
    								  :show-file-list="false"
    								  :on-success="handleAvatarSuccess"
    								  :on-preview="handlePictureCardPreview"
    	  							  :on-remove="handleRemove"
    	  							  :on-change="handleChange"
    								  :before-upload="beforeAvatarUpload">
    								  <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
    								  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    								</el-upload>
    							</el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件简称</td>
    			  			<td>
    							<el-form-item  prop="name">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    					             	<el-input size="small" v-model="ruleForm.name"></el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 事件内容</td>
    			  			<td>
    							<el-form-item prop="textarea">
    								<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    									<el-input
    									  type="textarea"
    									  :rows="4"
    									  placeholder="请输入内容"
    									  resize="none"
    									  v-model="ruleForm.textarea">
    									</el-input>
    					            </el-col>
    					         </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>链接</td>
    			  			<td>
    							<el-col :lg="{span:8,offset:8}" :xs="{span:14,offset:4}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}">
    				             	<el-input size="small" v-model="ruleForm.url"></el-input>
    				            </el-col>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>停/启用状态</td>
    			  			<td>
    			  				<el-radio-group v-model="ruleForm.state">
          							<el-radio v-model="ruleForm.radio" label="1">启用</el-radio>
      								<el-radio v-model="ruleForm.radio" label="2">停用</el-radio>
        						</el-radio-group>
    			  			</td>
    			  		</tr>
    		  		</tbody>
    		  	</table>
    		  	<el-form-item>
    		  		<el-col class="sfooter">
    		           <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    		           <el-button @click="$router.go(-1);">取消</el-button>
    		        </el-col>
    	        </el-form-item>
    		</el-form>
        </el-col>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>
<script scoped>
  export default {
    data() {
      var uploadImg = (rule, value, callback) => {
        if(value == ''){
        	callback(new Error('请上传图片'))   //到时候通过给ruleForm.img 赋值  上传图片的时候赋值
        }
        callback();
      };
      return {
      	inlineMessage:true,
      	options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        ruleForm: {
          value:'',
          name:'',
          radio:'1',
          textarea:'',
          url:'',
          state:'1',
          img:'',
          imageUrl:'',
        },
        rules: {
          value: [
            { required: true,message: '请输入事件名称', trigger: 'blur' }
          ],
          name: [
            { required: true,message: '请输入角色名称', trigger: 'blur' },
            { min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
          ],
          textarea:[
          	{required: true,message: '请输入事件内容', trigger: 'blur' },
          	{ min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
          ],
          img:[
          	{validator: uploadImg, trigger: 'blur' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false,
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleChange(file, fileList) {
        this.ruleForm.img = file.name;
        console.log(this.ruleForm.img )
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
       handleAvatarSuccess(res, file) {
        this.ruleForm.imageUrl = URL.createObjectURL(file.raw);  //显示图片
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 或 png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style scoped>
	.el-form{
		padding: 15px 20px;
	}
	.line {
		text-align: center;
	}
	table.subTable {
		width: 100%;
		border-collapse:collapse;
		font-size: 14px;
		color:#909399;
		text-align:center;
	}
	table.subTable th, table.subTable td {
		border: 1px solid #ebeef5;
		padding: 5px ;
	}
	.tableTile {
		border-left: 1px solid #ebeef5;
		border-right: 1px solid #ebeef5;
		padding:15px;
		color:#000;
		text-align: center;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 78px;
	    height: 78px;
	    line-height: 78px;
	    text-align: center;
	  }
	.avatar {
	    width: 78px;
	    height: 78px;
	    display: block;
	  }
	.el-form-item {
		margin-bottom: 0;
	}
	.red {
	  	color:#f56c6c;
	  }
	 .sfooter {
	 	text-align: center;
	 	margin-top: 20px;
	 }
</style>
<style>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  

</style>