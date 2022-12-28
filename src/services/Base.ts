class BaseService {
  BaseModel: any;
  constructor(BaseModel: any) {
    this.BaseModel = BaseModel;
  }

  public getList() {
    return this.BaseModel.find();
  }

  public create(data = {}) {
    return this.BaseModel.create(data);
  }

  public findOne(where = {}) {
    return this.BaseModel?.findOne(where);
  }

  public update(id: string, data = {}) {
    return this.BaseModel?.update({ _id: id }, data, { new: true });
  }

  public updateWhere(where = {}, data = {}) {
    return this.BaseModel?.update(where, data, { new: true });
  }

  public delete(id: string) {
    return this.BaseModel?.findOneAndDelete({ _id: id });
  }

}

export default BaseService;
