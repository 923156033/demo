BOOTSTRAP_TOKEN=33be291778c26e5554d5ea7906e1fdb4
APISERVER=$1
SSL_DIR=$2
# ����kubelet bootstrapping kubeconfig 
export KUBE_APISERVER="https://$APISERVER:6443"
# ���ü�Ⱥ����
kubectl config set-cluster kubernetes \
  --certificate-authority=$SSL_DIR/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=bootstrap.kubeconfig
# ���ÿͻ�����֤����
kubectl config set-credentials kubelet-bootstrap \
  --token=${BOOTSTRAP_TOKEN} \
  --kubeconfig=bootstrap.kubeconfig
# ���������Ĳ���
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kubelet-bootstrap \
  --kubeconfig=bootstrap.kubeconfig
# ����Ĭ��������
kubectl config use-context default --kubeconfig=bootstrap.kubeconfig
#----------------------
# ����kube-proxy kubeconfig�ļ�
kubectl config set-cluster kubernetes \
  --certificate-authority=$SSL_DIR/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config set-credentials kube-proxy \
  --client-certificate=$SSL_DIR/kube-proxy.pem \
  --client-key=$SSL_DIR/kube-proxy-key.pem \
  --embed-certs=true \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-proxy \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config use-context default --kubeconfig=kube-proxy.kubeconfig