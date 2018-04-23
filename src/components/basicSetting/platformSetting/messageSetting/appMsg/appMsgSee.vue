<template>
	<div>
		<el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline-message="inlineMessage">
			  	<table class="subTable">
			  		<col width="30%" />
			  		<col width="70%" />
			  		<tbody>
			  			<tr>
				  			<td><span class="red">*</span> 事件名称</td>
				  			<td>
				  				{{ruleForm.value}}
				  			</td>
				  		</tr>
			  			<tr><td colspan="2" class="tableTile">审批</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td>
				  				<img :src="ruleForm.imageUrl" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.name}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.textarea}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.url}}
				  			</td>
				  		</tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件名称</td>
				  			<td>
				  				{{ruleForm.value}}
				  			</td>
				  		</tr>
			  			<tr><td colspan="2" class="tableTile">驳回</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td>
				  				<img :src="ruleForm.imageUrl" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.name}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.textarea}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.url}}
				  			</td>
				  		</tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件名称</td>
				  			<td>
				  				{{ruleForm.value}}
				  			</td>
				  		</tr>
			  			<tr><td colspan="2" class="tableTile">成功</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td>
				  				<img :src="ruleForm.imageUrl" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.name}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.textarea}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.url}}
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
          value:'123',
          name:'asdf asf asdf asdf asf asdf ',
          radio:'1',
          textarea:'asdf asf asdf asdf asf asdf asdf asf asdf asdf asf asdf asdf asf asdf asdf asf asdf asdf asf asdf asdf asf asdf ',
          url:'asdf asf asdf asdf asf asdf ',
          state:'1',
          img:'asdf asf asdf asdf asf asdf ',
          imageUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=254618362,2906926008&fm=200&gp=0.jpg',
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
		padding: 10px ;
	}
	table.subTable td.tableTile {
		padding:15px 0;
		color:#000;
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
	 tr td:nth-child(2){
	 	text-align: left;
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