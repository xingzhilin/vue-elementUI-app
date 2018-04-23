<template>
	<div id="add">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" label-width="80px">
			<table class="add_table">
				<tbody>
					<tr>
						<td width="110"><span class="zl_required">*</span>交割库名称：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>交割库编码：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td>交割库所在港口：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>交割库所在区：</td>
						<td>
							<el-select v-model="form.region" placeholder="请选择">
						      <el-option label="北方港" value="shanghai"></el-option>
						      <el-option label="南方港" value="beijing"></el-option>
						    </el-select>
						</td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>交割库所在省市：</td>
						<td>
							<el-select v-model="form.region" placeholder="省">
						      <el-option label="北方港" value="shanghai"></el-option>
						      <el-option label="南方港" value="beijing"></el-option>
						    </el-select>
							<el-select v-model="form.region" placeholder="市">
						      <el-option label="北方港" value="shanghai"></el-option>
						      <el-option label="南方港" value="beijing"></el-option>
						    </el-select>
						</td>
					</tr>
					<tr>
						<td>交割库详细地址：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>仓库类型：</td>
						<td>
							<el-select v-model="form.region" placeholder="请选择">
						      <el-option label="111" value="shanghai"></el-option>
						      <el-option label="2222" value="beijing"></el-option>
						    </el-select>
						</td>
					</tr>
					<tr>
						<td>货场：</td>
						<td><span>天津1号</span><span>录入堆位</span></td>
					</tr> 
					<tr>
						<td colspan="2"><span>添加</span></td>
					</tr>
					<tr>
						<td>堆位名称：</td>
						<td>
							<p>天津2号 -》天津2号1堆；天津2号2堆；天津3号3堆</p>
						</td>
					</tr> 
					<tr>
						<td>港杂费汽运：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td>港杂费火运：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>前台是否展示：</td>
						<td>
							<el-radio-group v-model="form.resource">
						      <el-radio label="是"></el-radio>
						      <el-radio label="否"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>是否交付地：</td>
						<td>
							<el-radio-group v-model="form.resource">
						      <el-radio label="是"></el-radio>
						      <el-radio label="否"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>是否电厂交付地：</td>
						<td>
							<el-radio-group v-model="form.resource">
						      <el-radio label="是"></el-radio>
						      <el-radio label="否"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>交割库图片：</td>
						<td>
							<ul>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
							</ul>
							<div class="btn">
								<span>+添加</span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="td_text">交割库简介：</td>
						<td>							
							<el-input type="textarea" v-model="form.desc"></el-input>
						</td>
					</tr>
					<tr>
						<td>停/启用状态：</td>
						<td class="td_text">
							<el-radio-group v-model="form.resource">
						      <el-radio label="启用"></el-radio>
						      <el-radio label="停用"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
					<tr>
						<td class="td_text">联系人：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
					<tr>
						<td class="td_text">联系电话：</td>
						<td><el-input v-model="form.name"></el-input></td>
					</tr>
				
				</tbody>
			</table>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('form')">下一步</el-button>
			    <el-button @click="resetForm('form')">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: '新增交割库',
				form: {}
			}
		},
		methods:{
			submitForm(){

			},
			resetForm(){

			}
		}
	}
</script>
<style scoped lang="scss">
	@import './../../../../../assets/css/common_view.css';
	.zl_required{
		color: red;
	}
	.add_table{
		width: 90%;
		margin: 30px auto;
		font-size:12px;
	}
</style>