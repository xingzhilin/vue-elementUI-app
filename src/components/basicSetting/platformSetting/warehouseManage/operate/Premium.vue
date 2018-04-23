<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		    <el-tab-pane label="北方港" name="first">
		    	<div class="wrap">
		    		<h1>北方港</h1>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="南方港" name="second">
		    	
		    	
		    	<div class="wrap">
		    		<h1>南方港</h1>
		    	</div>
		    </el-tab-pane>
		</el-tabs>

	</div>  
</template>
<script>
	export default {
		name: 'AccountManagement',
		data(){
			return {
				msg: 'AccountManagement',
				activeName: 'first'
			}
		},
		methods: {
			handleSubmit(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			handleClick(tab, event) {
		        console.log(tab, event);
		    },
			handleCheck(index, row){
				console.log(index, row);
		        this.$router.push({name: 'checkAccountLink'});
			}
		}
	}
</script>
<style scoped lang="scss">
	.el-breadcrumb{
		position: relative;
	    border-bottom: 1px solid #e5e5e5;
	    background-color: #f5f5f5;
	    min-height: 41px;
	    line-height: 40px;
	    padding-left: 20px;
	    display: block;
	}
	.el-form{
		padding: 15px 0 0 20px;
		color:#606266;
	}
	.el-table{
		width:97%;
		margin: 0 auto;
	}
	.el-form-item{
		margin-bottom:15px;
	}
	.el-container{
		padding:15px;
		.total{
			display: inline-block;
		    line-height: 30px;
		    padding-left: 20px;
		    font-size: 14px;
		}
	}
	.el-line{
		height: 2px;
		margin: 10px 15px 0;
		background-color:#f5f5f5;
	}
	.el-table .cell{
		text-align: center;
	}
	.el-footer{
		padding: 0;
		.el-pagination{
			padding:0;
			margin: 10px 15px;
			white-space: initial;
			text-align: right;
		}
	}
</style>